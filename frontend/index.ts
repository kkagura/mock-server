import { detailUsingPOST, getUserPermissionsUsingPOST } from "./swaggger";

detailUsingPOST({
  dataModule: "xxx",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    alert(err.message);
  });

getUserPermissionsUsingPOST({
  userId: 1,
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    alert(err.message);
  });
