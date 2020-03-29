---
title: 文件内配置
---

## 说明

在设计时，希望能够更专心于写好你的博客或笔记，无论之后增删改文件都不再需要关心插件的配置问题，所以将一些配置置于文件内。

进一步了解 [Front Matter](https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html#front-matter)。



## 精准排序

更精准的排序需要在文件中添加 `autoPrev` 或 `autoNext` 并指定[同目录下](http://localhost:8080/vuepress-plugin-auto-sidebar/questions.html#_1-%E5%AE%83%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%E7%94%9F%E6%88%90%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%90%97%EF%BC%9F)的文件名，需要注意的是，错误的文件名会导致侧边栏不显示该文件，[在线示例](https://github.com/shanyuhai123/documents/blame/master/docs/os/linux/everything-is-a-file.md#L3)。

```
---
autoPrev: fileNameXX
---
```

除了精准排序，还有[内置的排序规则](/features/plugin-options.html#sort（排序）)。



## 多个分组

希望像 vuepress 官网那样支持多个分组，需要在文件内添加分组标识 `autoGroup`：

```yaml
---
autoGroup-1: 分组名称
# autoGroup+10: 分组名称
---
```

其中 `autoGroup` 为固定格式，不可更改。`-` 和 `+` 二者选其一，`-` 代表在默认分组的下方，数字越大越往下；`+` 代表在默认分组的上方，数字越大越往上。