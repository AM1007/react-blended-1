import { BlogCard } from 'components/BlogCard/BlogCard';
import { Statistics } from 'components/Statistics/Statistics';
import { CryptoHistory } from 'components';
import { Container, Section, Heading } from 'components';
// import { ForbesList } from 'components/ForbesList/ForbesList';
import article from 'data/article.json';
import data from 'data/data.json';
// import forbes from 'data/forbes.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard {...article} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main statistics" stats={data} />
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        {/* <ForbesList list={forbes} /> */}
        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory transactions={transactions} />
      </Container>
    </Section>
  );
};
