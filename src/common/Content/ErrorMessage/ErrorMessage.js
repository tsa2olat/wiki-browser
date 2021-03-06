import { PageTitle, PrimaryButton } from "common";
import { toHome } from "core";
import { MessageWrapper } from "../MessageWrapper";
import { WarningIcon, Paragraph } from "./styled";

const ErrorMessage = () => (
  <MessageWrapper error>
    <WarningIcon />

    <PageTitle>
      Ooops! Something went&nbsp;wrong…
    </PageTitle>

    <Paragraph>
      Please check your network connection<br />and try again
    </Paragraph>

    <PrimaryButton link to={toHome()}>
      Back to homepage
    </PrimaryButton>

  </MessageWrapper>
);

export default ErrorMessage;