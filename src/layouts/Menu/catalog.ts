interface ICatalogItemProps {
  title: string
  id: string
  children?: ICatalogItemProps[]
}

export const Catalog: ICatalogItemProps[] = [
  {
    title: '正篇',
    id: 'TwoReactive',
    children: [
      {
        title: '两个响应式',
        id: 'TwoReactive'
      }
    ]
  },
  {
    title: '思想',
    id: 'thinks',
    children: [
      {
        title: '正交的组件',
        id: 'OrthogonalComp'
      }
    ]
  }
]
