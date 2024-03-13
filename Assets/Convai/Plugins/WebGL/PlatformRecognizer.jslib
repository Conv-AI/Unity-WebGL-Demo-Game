var PlatformRecognizer = {
  IsMobile: function () {
    return Module.SystemInfo.mobile;
  },
};

mergeInto(LibraryManager.library, PlatformRecognizer);
