$.mockjax({
  url: "/api/cwd",
  responseText: ["/home/123/code/"]
});
$.mockjax({
  url: "/api/project/new",
  responseText: []
});
$.mockjax({
  url: "/api/project/copy",
  responseText: []
});
$.mockjax({
  url: "/api/dependency",
  responseText: {
    "response": {
      "docs": [
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" },
        { "g": "com.group", "a": "artifact" }
      ]
    }
  }
});
$.mockjax({
  url: "/api/dependency/version",
  responseText: {
    "response": {
      "docs": [
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" },
        { "v": "1.2.3.4" }
      ]
    }
  }
});
$.mockjax({
  url: "/api/examples",
  responseText: ["build-info-example", "dotty-example", "multi-project-example", "resources-example", "scalafmt-example"]
});
$.mockjax({
  url: "/api/example/files",
  responseText: {
    "name": "aaa",
    "path": "",
    "children": [
      {
        "name": "bbb",
        "path": ""
      },
      {
        "name": "asdfasdfafd",
        "path": "",
        "children": [
          {
            "name": "cccccc1",
            "path": ""
          },
          {
            "name": "cccccc2",
            "path": ""
          },
          {
            "name": "cccccc3",
            "path": ""
          },
          {
            "name": "cccccc4",
            "path": ""
          }
        ]
      }
    ]
  }
});
$.mockjax({
  url: "/api/example/file",
  responseText: "asdasfafasdfasdfa\nasdagsghsd ahdfli ashasdf hahsdklfuh a\na;ldsfhalk hasih dd fhdkuffvh \n\n\n\n\n\n\n\n\n\na;sdlkfj"
});
