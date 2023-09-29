import {
  HighlightedText,
  Message,
  MessageWrapper,
} from './NoResultsMessage.styled';

export const NoResultsMessage = () => {
  return (
    <MessageWrapper>
      <Message>
        <HighlightedText>Sorry, no results were found</HighlightedText> for the
        product filters you selected. You may want to consider other search
        options to find the product you want. Our range is wide and you have the
        opportunity to find more options that suit your needs.
      </Message>
      <Message>
        <HighlightedText>Try changing the search parameters.</HighlightedText>
      </Message>
    </MessageWrapper>
  );
};
