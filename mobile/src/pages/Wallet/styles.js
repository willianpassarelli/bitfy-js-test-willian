import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 25px;
  padding: 0 20px;
`;

export const User = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 18px;
`;

export const Welcome = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #2699fb;
`;

export const ButtonSignOut = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 48px;
  background: #474aff;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Display = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ['#B400FF', '#017AFF'],
})`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  height: 115px;
  border-radius: 10px;
  margin: 0 20px;
`;

export const TextDisplay = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const Balance = styled.Text`
  font-size: 32px;
  font-weight: 500;
  color: #fff;
`;

export const DisplayQuotation = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 15px 0;
  position: relative;
  margin: 0 50px;
  top: -30px;
`;

export const TextQuotation = styled.Text`
  font-size: 12px;
  color: #ff2d5e;
`;

export const Value = styled.Text`
  font-weight: 700;
`;

export const TranscationsList = styled.SectionList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Title = styled.Text`
  color: #3755ff;
  margin: 20px 0 0 18px;
`;
