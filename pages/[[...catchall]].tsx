import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

export interface CatchallParsedUrlQuery extends ParsedUrlQuery {
  catchall: string | string[];
}

export interface PageProps {
  page?: string;
  preview: boolean;
}

export interface StaticProps extends PageProps {}

export const getStaticPaths: GetStaticPaths<CatchallParsedUrlQuery> = async () => {
  return {
    paths: [
      {
        params: {
          catchall: [],
        },
      },
      {
        params: {
          catchall: ['thunder'],
        },
      },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<StaticProps, CatchallParsedUrlQuery> = ({params, preview}) => {
  const {catchall} = params ?? {};

  const pageSlug =
    typeof catchall === 'string'
      ? catchall
      : Array.isArray(catchall)
      ? catchall.join('/')
      : 'index';
  
  return {
    props: {
      page: pageSlug,
      preview: !!preview,
    },
  };
}

const CatchallPage: NextPage<StaticProps> = ({
  page,
  preview
}) => {
  return (<div>
    <h1>{page}</h1>
    <p>{preview}</p>
  </div>)
}

export default CatchallPage;