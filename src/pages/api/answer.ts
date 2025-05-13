import { postAnswer } from "@/pages/service/answer";
import { NextApiRequest, NextApiResponse } from "next";

const genAnswer = (reqBody: any) => {
  const answerList: any[] = [];
  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentId: key,
      value: reqBody[key],
    });
  });
  return {
    questionId: reqBody.questionId || "",
    answerList,
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({
      success: false,
      error: "Method Not Allowed",
    });
  try {
    const answer = genAnswer(req.body);
    const resData = await postAnswer(answer);
    if (resData.code === 200 || resData.code === 201) {
      return res.redirect("/success");
    } else {
      return res.redirect("/fail");
    }
  } catch (error) {
    return res.redirect("/fail");
  }
}
