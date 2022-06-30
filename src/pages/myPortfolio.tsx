import { MicroCMSListResponse } from "microcms-js-sdk";
import { NextPage } from "next";
import{ Blog} from "../pages/index"

type Props = MicroCMSListResponse<Blog>;

const myPortfolio :NextPage<Props> = (props) => {
  return <div>MyPortfolio</div>;
};

export default myPortfolio