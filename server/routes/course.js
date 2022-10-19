const router = require("express").Router();

//有通過這個路徑會通知
router.use((req, res, next) => {
  console.log("A request is coming into api...");
  next();
});

//測試API是否可以連線
router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API is working.",
  };
  return res.json(msgObj);
});

module.exports = router;
