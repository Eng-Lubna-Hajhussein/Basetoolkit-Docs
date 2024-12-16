import TemplatePage from "../../../../../sharedUI/TemplatePage/TemplatePage";
import demo from "./../../../../../../assets/demo/1inch_clone.mp4";

function Route1inchClone() {
  return (
    <TemplatePage
      srcCode={"https://github.com/Eng-Lubna-Hajhussein/1inch-clone"}
      livePreview={"https://eng-lubna-hajhussein.github.io/1inch-clone/"}
      demo={demo}
      title="1inch Clone"
      description={
        "A responsive template inspired by the popular 1inch cryptocurrency exchange aggregator. Perfect for creating a decentralized exchange or finance app interface. The layout is fully responsive, adapting seamlessly across desktop, tablet, and mobile devices for an optimal user experience."
      }
    />
  );
}

export default Route1inchClone;