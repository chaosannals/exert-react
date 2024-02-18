import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

// 官方示例，把 use* 弄到 props 里面。感觉没必要，不是每个页面都要用到路由信息。
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    // 组件可以通过下面3 个 use* 获取路由信息。
    let location = useLocation(); // 路由信息。
    let navigate = useNavigate(); // 导航方法 navigate('/')
    let params = useParams(); // path 参数信息。
    let query = useSearchParams(); // query_string
    return <Component {...props} router={{ location, navigate, params, query }} />;
  }

  return ComponentWithRouterProp;
}

