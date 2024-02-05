import { ForbesListItem } from 'components/ForbesListItem/ForbesListItem';
import {
  LeaderBoard,
  BoardHeader,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>
      <LeaderBoardProfiles>
        {list.map(({ id, name, avatar, capital, isIncrease }) => (
          <ForbesListItem
            key={id}
            name={name}
            capital={capital}
            avatar={avatar}
            isIncrease={isIncrease}
          />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
