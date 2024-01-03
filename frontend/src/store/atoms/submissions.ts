import axios from "axios";
import { atom, selector } from "recoil";

type Submission = {
    language: string;
    timestamp: number;
    submission: string;
    status: string;
}
export const globalSubmissions = selector({
    key: 'globalSubmissions',
    get: async ({get}) => {
      const response = await axios.get("https://getsubmissions-jpzo5bevwq-uc.a.run.app");
      return response.data.response.map(x => ({
        language: x.language,
        timestamp: x.submitTime._nanoseconds,
        submission: x.submission,
        status: x.status
      }));
    },
})