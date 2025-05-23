import { get } from "./api";

export async function getQuestionList() {
  const res = await get(`/api/question/list`);
  return res.data;
}

export async function getQuestionById(id: string) {
  const res = await get(`/api/question/detail/${id}`);
  return res;
}
