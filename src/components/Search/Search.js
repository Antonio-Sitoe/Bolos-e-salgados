import { BiSearchAlt } from 'react-icons/bi';
import { Links } from '../../styles/styles';
import { Wrapper } from './styles';

const Search = () => {
  return (
    <Wrapper>
      <input type='search' placeholder='O que deseja hoje ?' />
      <Links href=''>
        <BiSearchAlt />
      </Links>
    </Wrapper>
  );
};

export default Search;
