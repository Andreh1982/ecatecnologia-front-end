import SlackMessenger from "layouts/slackmessenger";
import ShowPayload from "layouts/showpayload";
import ListAllEntries from "layouts/listallentries";
import SignIn from "layouts/authentication/sign-in";

import Icon from "@mui/material/Icon";

const routes = [
  {
    name: "Sign In",
    key: "signin",
    route: "/",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Slack Messages",
    key: "slackmessenger",
    icon: <Icon fontSize="small">messages</Icon>,
    route: "/slackmessenger",
    component: <SlackMessenger />,
  },
  {
    type: "collapse",
    name: "API Messages Payload",
    key: "showpayload",
    icon: <Icon fontSize="small">code</Icon>,
    route: "/showpayload",
    component: <ShowPayload />,
  },
  {
    type: "collapse",
    name: "List All Entries",
    key: "listallentries",
    icon: <Icon fontSize="small">code</Icon>,
    route: "/listallentries",
    component: <ListAllEntries />,
  },
];

export default routes;
