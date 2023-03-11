import { GroupList } from '../../components/Grouplist';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { NextButton } from './Button';
import { SharedBillMain } from './styles';

export const SharedBill = () => {
  return (
    <SharedBillMain>
      <Navbar logout />
      <Header />
      <GroupList />
      <NextButton to={'/'}>Nova divisão</NextButton>
    </SharedBillMain>
  );
};
