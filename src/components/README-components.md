<h1 align="center">
  Reusable components
</h1>
Here's description for components we can reuse in different pages.

## 🔗 CustomLink Component: now with little arrow!

A link component with underline effect on mouse hover

#### How to use it?

1. import it

```
import CustomLink from "../components/customlink"
```

2. create the component: without arrow

```
const YourComponent = () => (
  <YourContainer>
    <CustomLink to="/" displayText="Learn More" linkcolor="#FFF" fontSize="22px"/>
  </YourContainer>
)
```
3. You can choose to have an arrow
```
const YourComponent = () => (
  <YourContainer>
    <CustomLink to="/" displayText="Learn More" linkcolor="#FFF" fontSize="22px" arrow/>
  </YourContainer>
)
```

###### ❕Required properties:

- `to`: the url on the link component
- `displayText`: text on the link

###### Optional properties:

- `linkcolor`: the color of the text, the underline and the arrow! default color is black `#000000`
- `arrow`: don't need to pass specific value for it, just add `arrow`, then arrow svg will show on the right of your link component
- `fontSize`: the font size of the link text, default size is `16px`

## 💻 Banner

Opening part for every page

#### How to use it?

1. import it

```
import Banner from "../components/banner"
```

2. create the component, put directly under Layout

```

const YourComponent = () => (
    <YourContainer>
        <Banner
      title="Smartchain: "
      subtitle="The next evolution of distributed technology"
      description="We are building a smart, secure, and adaptable gloabal ecosystem for distributing digital information."
      link="/"
      linkText="What is Smartchain?"
      linkcolor="#8EB4D0"
      linkSize="22px"
    />
    </YourContainer>
)
```

###### ❕Required properties:

- `title`: big title on the banner (styled.h1 element), color is `#07528b`

###### Optional properties:

- `subtitle` : styled.h2 element, default is empty text, color is `#07528b`
- `description`: styled.p element, default is empty text, color is `#3f9ce5`
- `link`: link url on the banner, default is empty text
- `linkText`: text of the link on the banner, default is empty text
- `linkcolor`: the color of the text and the underline, default color is black `#000000`
- `linkSize`: the size of link text, default is `16px`

## ✏️ TitleLiner

a colored underline of title, with gradient color

#### How to use it?

1. import it

```
import TitleLiner from "../components/titleliner.jsx"
```

2. create the component

```
const YourComponent = () => (
    <YourContainer>
      <TitleLiner
        color="orange"
        size="350" />
    </YourContainer>
)
```

###### ❕Required properties:

No required properties

###### Optional properties:

- `color`: only two available values for color: `orange` and `blue`, input as string, default is blue gradient
- `size` : default value is `300`, please resize around this value, otherwise it might not be in the proper size
