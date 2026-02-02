module.exports = {
  dependency: {
    platforms: {
      windows: {
        sourceDir: 'windows',
        solutionFile: null,
        projects: [
          {
            projectFile: 'RNFS\\RNFS.vcxproj',
            directDependency: true,
          },
        ],
      },
    },
  },
};
