// 模拟宝藏地图API
class TreasureMap {
  static getInitialClue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
      }, 1000);
    });
  }

  // solveRiddle 只允许一次回答，答对返回答案，答错返回null
  static solveRiddle(getAnswer) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const riddle = { q: "什么东西越洗越脏？", a: "水" };
        // getAnswer 是一个函数，返回用户输入
        const userAnswer = getAnswer ? getAnswer(riddle.q) : null;
        if (userAnswer && userAnswer.trim() === riddle.a) {
          resolve({ success: true, answer: userAnswer });
        } else {
          resolve({ success: false, answer: userAnswer });
        }
      }, 1200);
    });
  }

  // decodeAncientScript 依赖 solveRiddle 的结果
  static decodeAncientScript(riddleResult) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!riddleResult || !riddleResult.success) {
          reject("没有线索可以解码!");
        } else {
          resolve("解码成功!宝藏在一座古老的神庙中...");
        }
      }, 1500);
    });
  }

  static meetNPC() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("遇到神秘NPC，赠送你一把钥匙！");
      }, 1000);
    });
  }



  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          reject("糟糕!遇到了神庙守卫!");
        }
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  static openTreasureBox() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("恭喜!你找到了并用钥匙打开了传说中的宝藏!");
      }, 1000);
    });
  }
}

// async/await 版寻宝流程，包含新情节
async function findTreasureWithAsync() {
  try {
    const clue = await TreasureMap.getInitialClue();
    console.log(clue);
    const npc = await TreasureMap.meetNPC();
    console.log(npc);

    const location = await TreasureMap.decodeAncientScript(riddleResult);
    console.log(location);

    const box = await TreasureMap.searchTemple(location);
    console.log(box);

    const treasure = await TreasureMap.openTreasureBox();
    console.log(treasure);
  } catch (error) {
    console.error("任务失败:", error);
  }
}

findTreasureWithAsync();