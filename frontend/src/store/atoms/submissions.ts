import axios from "axios";
import { selector } from "recoil";

export type Submission = {
    language: string;
    timestamp: string;
    submission: string;
    status: string;
    username: string;
    problemId: string;
}
export const globalSubmissions = selector({
    key: 'globalSubmissions',
    get: async ({}) => {
      const response = await axios.get("https://getsubmissions-jpzo5bevwq-uc.a.run.app");
      return response.data.response.map((x: any) => ({
        language: x.submission.language,
        timestamp: x.submission.submitTime._nanoseconds,
        submission: x.submission.submission,
        status: x.submission.status,
        problemId: x.submission.problemId,
        username: x.user.username,
      }));
    },
})