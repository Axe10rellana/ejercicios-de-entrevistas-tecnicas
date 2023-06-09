const api = {
  list: () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          {
            id: 1,
            text: "tarea 1",
            completed: false,
          },
          {
            id: 2,
            text: "tarea 2",
            completed: true,
          },
          {
            id: 3,
            text: "tarea 3",
            completed: false,
          },
        ]);
      }, 1000)
    ),
};

export default api;
