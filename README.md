## connected-react-router

- 它是一个把redux和路由连在一起的库
- 1.可以通过派发动作方式跳转路径
- 2.可以在仓库里获取最新路径信息 store可以存放location 和 action

## 使用步骤
1. push 是一个方法，会返回一个action
2. 引入中间件routerMiddleware 能够识别这个action ，进行路径跳转

3. 引入connectedReactRouter 可以实现监听路径变化的功能 当路径发生变化后会派发特定的action
4. 引入connectRouter 然后此reducer能够识别这种action，把这个action里面对应的路径信息 保存到store里
    store.getState().router.location
