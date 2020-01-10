# Examples

## Material-UI

https://github.com/mui-org/material-ui/tree/master/packages/material-ui/src/CardContent

* Use filenames to be explicit


## Thoughtbot

https://thoughtbot.com/blog/using-redux-with-react-hooks

* Use the default export to export the thing that's meant to be used.
* Use named exports to export an internal thing that needs to be tested/storied.

```js
export const Count = ({ count, addCount }) => {
  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={addCount}>Add to count</button>
    </main>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = { addCount };

export default connect(mapStateToProps, mapDispatchToProps)(Count);
```

> "While the Redux Hooks have many benefits, there is one benefit of using connect instead of the Redux Hooks, and that is that it keeps your component decoupled from Redux. You can then test the component or prototype it in tools like Storybook without having to connect the component."

> "An earlier version of this article recommended continuing to use the connect middleware instead of using the Redux Hooks for this reason. While this reasoning is still valid to an extent, I’ve since found that in tests and prototyping tools, I almost always wrap my components in a Redux Provider and test them in the context of being connected to Redux anyway. It’s just easier since my component might have a descendent that is connected to Redux and therefore still need to be connected."

