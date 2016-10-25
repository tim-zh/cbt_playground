$.mockjax({
  url: "/api/cwd",
  responseText: ["/home/123/code/"]
});
$.mockjax({
  url: "/api/project",
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
