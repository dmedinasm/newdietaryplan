import { getPlanData } from "../fetch/PlanResult";


export function useDietPlan ({updateMealsID}) {
    const planResult = async (params) => {
        try {
            const data = await getPlanData(
              params.kcMin,
              params.kcMax,
              params.kMinBr,
              params.kMaxBr,
              params.kcMinLunch,
              params.kcMaxLunch,
              params.kcMinDin,
              params.kcMaxDin,
              params.diet,
              params.allergy)
             
          updateMealsID(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      return {planResult}
}
