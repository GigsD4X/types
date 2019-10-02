If the index is &gt;= 0 and less than the size of the layout, this method acts like [UIPageLayout.JumpTo](https://developer.roblox.com/api-reference/function/UIPageLayout/JumpTo). If it's out of bounds and circular is set, it will animate the full distance between the in-bounds index of [UIPageLayout.CurrentPage](https://developer.roblox.com/api-reference/property/UIPageLayout/CurrentPage) and the new index.