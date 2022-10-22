const router = require("express").Router();
const Collection = require("../models/collection-model");
const collectionValidation = require("../validation").collectionValidation;

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

//加入收藏(create)
router.post("/", async (req, res) => {
  //檢查輸入資料是否符合資料庫規格
  const { error } = collectionValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { id, photographer, photographer_url, src, alt, original } = req.body;

  let newCollection = new Collection({
    id,
    photographer,
    photographer_url,
    src,
    alt,
    original,
    author: req.user._id,
  });

  try {
    await newCollection.save();
    res.status(200).send("New collection has been saved.");
  } catch (e) {
    res.status(400).send("Cannot save collection.");
  }
});

//讀取我的收藏(read)
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Collection.find({ author: _id })
    .then((collection) => {
      res.send(collection);
    })
    .catch(() => {
      res.status(500).send("Error!! Cannot get collection!!");
    });
});

//刪除指定相片(delete)
router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let collection = await Collection.findOne({ id });
  if (!collection) {
    res.status(404);
    return res.json({
      success: false,
      message: "Collection not found.",
    });
  }
  Collection.deleteOne({ id })
    .then(() => {
      res.send("Collection deleted.");
    })
    .catch((error) => {
      res.send({
        success: false,
        message: error,
      });
    });
});

module.exports = router;
