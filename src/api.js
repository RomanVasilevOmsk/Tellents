export const fetchTestRequest = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          test: [
            {
              id: 1,
              testName: 'Test1',
            },
            {
              id: 2,
              testName: 'Test2',
            },
            {
              id: 3,
              testName: 'Test3',
            },
            {
              id: 4,
              testName: 'Test4',
            },
          ],
        },
      });
    }, 1000);
  });
};
