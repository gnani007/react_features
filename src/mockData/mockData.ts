export const data = [
    {
      id: 1,
      name: "root",
      children: [
        {
          id: 2,
          name: "sub1",
          children: [
            {
              id: 3,
              name: "sub-sub1",
              children: [
                { id: 4, name: "deep-sub1" },
                { id: 5, name: "deep-sub2" },
              ],
            },
          ],
        },
        { id: 6, name: "sub2" },
      ],
    },
  ];