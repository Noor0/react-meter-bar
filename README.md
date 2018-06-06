# react-meter-bar

A simple react meter component with seperators and labels
[Live demo](https://noor0.github.io/react-meter-bar/ "Live demo")

##### Installation
```
yarn add react-meter-bar
```

```
npm install react-meter-bar
```

##### Example #1
```
import Bar from 'react-meter-bar';

<Bar
  labels={[0,10,20,30,40,50,60,70,80,90,100]}
  labelColor="steelblue"
  progress={80}
  barColor="#fff34b"
  seperatorColor="hotpink"
/>
```

##### Example #2
```
import Bar from 'react-meter-bar';

<Bar
  labels={["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"]}
  labelColor="steelblue"
  progress={85}
  barColor="#FF0303"
  seperatorColor="#fff"
  />
```

![react-meter-bar](https://i.imgur.com/rVpEEXf.png "react-meter-bar")
