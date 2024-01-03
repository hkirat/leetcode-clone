import {setGlobalOptions} from "firebase-functions/v2";

import {onRequest, onCall} from "firebase-functions/v2/https";

import * as logger from "firebase-functions/logger";
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { SUPPORTED_LANGUAGES } from "./utils";
initializeApp();

const db = getFirestore();

setGlobalOptions({maxInstances: 10});

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const getSubmissions = onRequest(async (request, response) => {
    // const offset = request.body.offset;
    const limit = request.body.limit || 10;
    const res = await db.collection("submissions").limit(limit).orderBy("submitTime", "desc").get();
    const submissions = [];
    res.docs.forEach(doc => {
        submissions.push(doc.data())
        console.log(doc.data())
    })

    response.send({
        response: submissions,
        hi: 2
    })
})

export const submit = onCall(async (request) => {
    const uid = request.auth.uid;
    const language = request.data.language;
    const submission = request.data.submission;
    const problemId = request.data.problemId;

    if (!uid) {
        return {
            message: "Unauthorized"
        }
    }

    if (!SUPPORTED_LANGUAGES.includes(language)) {
        return {
            message: "Language not supported"
        }
    }

    const problem = await db.collection("problems").doc(problemId?.toString()).get();

    if (!problem.exists) {
        return {
            message: "Problem Doesnt exist"
        }
    }

    const doc = await db.collection("submissions").add({
        language,
        submission,
        problemId,
        userId: uid,
        submitTime: new Date(),
        workerTryCount: 0,
        status: "PENDING"
    })

    return {
        message: "Submission done",
        id: doc.id
    }
})