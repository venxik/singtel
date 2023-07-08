import { Text, TextProps } from '../Themed/Themed';

const ComicText = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: 'comic' }]} />;
};

export default ComicText;
