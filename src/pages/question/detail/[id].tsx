import PageWrapper from "@/pages/components/PageWrapper";
import { getQuestionById } from "@/pages/service/question";
import { getComponent } from "@/pages/components/QuestionComponents";

interface PropsType {
  id: string;
  code: number;
  data: {
    id: string;
    title: string;
    isPublished: boolean;
    isDeleted: boolean;
    componentList: Array<any>;
    desc?: string;
    js?: string;
    css?: string;
  };
  msg?: string;
}

const componentWrapper = "border-b border-[#f1f1f1]] pt-[16px]";

export default function Question(props: PropsType) {
  const { code, data, msg, id } = props;

  if (code !== 0) {
    return (
      <PageWrapper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }
  const { isDeleted, isPublished, title = "", desc, componentList = [] } = data;
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷已删除</p>
      </PageWrapper>
    );
  }

  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷尚未发布</p>
      </PageWrapper>
    );
  }

  if (!componentList.length) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h1>{title}</h1>
        <p>该问卷暂无组件</p>
      </PageWrapper>
    );
  }

  const ComponentListElem = (
    <>
      {componentList.map((item) => {
        const Component = getComponent(item);
        return (
          <div className={componentWrapper} key={item.fe_id}>
            {Component}
          </div>
        );
      })}
    </>
  );

  return (
    <PageWrapper title={title} desc={desc}>
      <div className="px-[16px]">
        <form method="post" action="/api/answer">
          <input type="hidden" name="questionId" value={id || data?.id} />
          {ComponentListElem}
          <div className="flex justify-center m-[16px]">
            <button
              type="submit"
              className="bg-[#1677ff] text-white px-[15px] py-[4px] rounded-[3px] border border-transparent"
            >
              提交
            </button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}

export async function getServerSideProps(context: any) {
  const { id = "" } = context.params;
  try {
    const res = await getQuestionById(id);

    return {
      props: {
        id,
        ...res,
      },
    };
  } catch (e) {
    return {
      props: {
        id,
        code: 1,
        data: null,
        msg: "获取问卷失败",
      },
    };
  }
}
