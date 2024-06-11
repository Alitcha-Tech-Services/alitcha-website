import JoinAlitchaButton from "../../components/commons/JoinAlitchaButton";
import Newsletter from "../../components/features/Newsletter";
import SolutionDetailComponent from "../../components/features/SolutionDetailComponent";


function HomeSolutionsMore() {
  return (
    <div>
        <div>
            <h3 className="text-center text-color-primary mt-5 mb-5">Les Solutions de Cat IA</h3>
            <div className="d-flex justify-content-center">
              <div className="w-75" >
                  <div className="d-flex justify-content-evenly">
                      <SolutionDetailComponent iIndex={1} />
                      <SolutionDetailComponent iIndex={2} />
                      <SolutionDetailComponent iIndex={3} />
                      <SolutionDetailComponent iIndex={4} />
                  </div>
                  <div></div>
              </div>
            </div>
            <div className="mt-5 pt-4">
                <JoinAlitchaButton />
            </div>
            <div>
                <Newsletter />
            </div>
        </div>
    </div>
  );
}

export default HomeSolutionsMore;
