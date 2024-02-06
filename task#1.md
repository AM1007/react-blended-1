### Blog card

It is necessary to create a `<BlogCard/>` component that would allow us to
display information about a social media user. User data is stored in a
[article.json](./src/data/article.json) file.

![Preview](./assets/BlogCard.jpg)

#### Description of the `<BlogCard/>` component

The component should take several props with user information:

- `poster` – card poster
- `tag` – article category
- `title` – article title
- `description` – description
- `name` – user's name
- `avatar` – user's avatar
- `postedAt` – creation time (recommended in a format from the date to today)

The component should create the following structure.

```jsx
<Card>
  <CardHeader>
    <CardPoster
      src="https://source.unsplash.com/600x400/?computer"
      alt="card__image"
    />
  </CardHeader>
  <CardBody>
    <Tag>Technology</Tag>
    <CardTitle>What's new in 2022 Tech</CardTitle>
    <CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis
      molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src="https://i.pravatar.cc/40?img=1" alt="Jane Doe" />
      <UserInfo>
        <UserName>Jane Doe</UserName>
        <Date>2h ago</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
```

> To format the date, use the
> [formatDistanceToNow](https://date-fns.org/v2.28.0/docs/formatDistanceToNow)
> method from the **date-fns** library.

#### Example of use

```js
import article from 'data/article.json';

<BlogCard
  poster={article.poster}
  tag={article.tag}
  title={article.title}
  description={article.description}
  userName={article.name}
  avatar={article.avatar}
  postedAt={article.postedAt}
/>;
```
