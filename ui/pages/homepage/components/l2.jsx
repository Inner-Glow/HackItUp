import React from "react";

const texts = [
    // Addiction-related disorders
    ["Addiction", "Binge Drinking", "Cannabis Use Disorder", "Drug Addiction", "Nicotine Addiction", "Quit Smoking"],
  
    // Neurodevelopmental and childhood disorders
    ["ADHD, Childhood", "Autism", "Intellectual Disability"],
  
    // Neurodegenerative disorders
    ["Alzheimer's Disease"],
  
    // Anxiety and stress-related disorders
    ["Anxiety", "PTSD", "Stress"],
  
    // Mood and personality disorders
    ["Avoidant Personality Disorder", "Bipolar Disorder", "Schizoaffective Disorder", "Schizoid Personality Disorder"],
  
    // Eating disorders
    ["Binge Eating", "Eating Disorders", "Night Eating Syndrome"],
  
    // Therapy and treatment
    ["Clinical Psychology", "Online Therapy"],
  
    // Hormonal and psychological disorders
    ["Premenstrual Dysphoric Disorder"],
  
    // Social and emotional struggles
    ["Gender Dysphoria", "Grief & Loss", "Loneliness"],
  
    // Sleep-related disorders
    ["Sleep Disorders"]
  ];

class L2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="ll2 gap-[100px] text-[200%] font-[Metropolis]">
                {
                    texts.map((v,i)=>{
                        return <div id={"l"+i} className="flex whitespace-nowrap gap-[100px]">{
                            v.map((_)=>{
                                return <div className="whitespace-nowrap">{_}</div>
                            })
                        }</div>
                    })
                }
            </div>
        )
    }

}

export default L2