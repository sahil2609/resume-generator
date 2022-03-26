import React, {Component} from 'react';
import Profile from './Profile';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Extras from './Extras';

export class Resume extends Component{
    state = {
        step: 1,
        //Profie
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        socialmedia: '',
        website: '',

        //Education
        college: '',
        from1 : '',
        to1 : '',
        qualification1: '',
        description1 : '',
        department : '',
        school : '',
        from2 : '',
        to2 : '',
        qualification2: '',
        description2 : '',
        school2  : '',
        from3 : '',
        to3 : '',
        qualification3 : '',
        description3 : '',

        // Projects
        title1 : '',
        link1 : '',
        desc1 : '',
        title2 : '',
        link2 : '',
        desc2 : '',
        title3 : '',
        link3 : '',
        desc3 : '',
        title4 : '',
        link4 : '',
        desc4 : '',

        //Skills
        skillhead1 : '',
        skilldesc1 : '',
        skillhead2 : '',
        skilldesc2 : '',
        skillhead3 : '',
        skilldesc3 : '',
        skillhead4 : '',
        skilldesc4 : '',
        skillhead5 : '',
        skilldesc5 : '',
        skillhead6 : '',
        skilldesc6 : '',

        //Experience
        head1 : '',
        pos1 : '',
        expdesc1 :'',
        head2 : '',
        pos2 : '',
        expdesc2 :'',
        exduration1 : '',
        exduration2 : '',

        //PORs
        por1 : '',
        club1 : '',
        por2 : '',
        club2 : '',
        por3 : '',
        club3 : '',
        porduration1 : '',
        porduration2 : '',
        porduration3 : '',

        //Extracurriculars and Achievements
        ach1: '',
        achdesc1 : '',
        ach2: '',
        achdesc2 : '',
        ach3: '',
        achdesc3 : '',
        ach4: '',
        achdesc4 : '',
        ach5 : '',
        achdesc5 : '',
        ach6 : '',
        achdesc6 : '',

    };

    nextStep = () => {
        const {step} = this.state;
        this.setState ({
            step: step + 1,
        });
    };
    
    prevStep = () => {
        const {step} = this.state;
        this.setState ({
            step: step - 1,
        });
    };

    handleChange = ({target: {value, name}}) => {
        this.setState ({[name]: value});
    };

    


    render() {
        const {step} = this.state;
        const{
            firstname,
            lastname,
            email,
            phone,
            github,
            linkedin,
            socialmedia,
            website,

            //Education
            college,
            from1,
            to1,
            qualification1,
            description1,
            department,
            school,
            from2,
            to2,
            qualification2,
            description2,
            school2,
            from3,
            to3,
            qualification3,
            description3,

            // Projects
            title1,
            link1,
            desc1,
            title2,
            link2,
            desc2,
            title3,
            link3 ,
            desc3,
            title4,
            link4,
            desc4,

            //Skills
            skillhead1,
            skilldesc1,
            skillhead2,
            skilldesc2,
            skillhead3,
            skilldesc3,
            skillhead4,
            skilldesc4,
            skillhead5,
            skilldesc5,
            skillhead6,
            skilldesc6,

            //Experience
            head1,
            pos1,
            expdesc1,
            head2,
            pos2,
            expdesc2,
            exduration1,
            exduration2,

            //PORs
            por1 ,
            club1,
            por2 ,
            club2,
            por3,
            club3,
            porduration1 ,
            porduration2,
            porduration3,

            //Extracurriculars and Achievements
            ach1,
            achdesc1,
            ach2,
            achdesc2,
            ach3,
            achdesc3 ,
            ach4,
            achdesc4,
            ach5,
            achdesc5,
            ach6,
            achdesc6,
        } = this.state;

        const values = {
            firstname,
            lastname,
            email,
            phone,
            github,
            linkedin,
            socialmedia,
            website,
    
            //Education
            college,
            from1,
            to1,
            qualification1,
            description1,
            department,
            school,
            from2,
            to2,
            qualification2,
            description2,
            school2,
            from3,
            to3,
            qualification3,
            description3,
    
            // Projects
            title1,
            link1,
            desc1,
            title2,
            link2,
            desc2,
            title3,
            link3 ,
            desc3,
            title4,
            link4,
            desc4,
    
            //Skills
            skillhead1,
            skilldesc1,
            skillhead2,
            skilldesc2,
            skillhead3,
            skilldesc3,
            skillhead4,
            skilldesc4,
            skillhead5,
            skilldesc5,
            skillhead6,
            skilldesc6,
    
            //Experience
            head1,
            pos1,
            expdesc1,
            head2,
            pos2,
            expdesc2,
            exduration1,
            exduration2,
    
            //PORs
            por1 ,
            club1,
            por2 ,
            club2,
            por3,
            club3,
            porduration1,
            porduration2,
            porduration3,
    
            //Extracurriculars and Achievements
            ach1,
            achdesc1,
            ach2,
            achdesc2,
            ach3,
            achdesc3 ,
            ach4,
            achdesc4,
            ach5,
            achdesc5,
            ach6,
            achdesc6,
        };
            // <div className="App mt-3">
            //     <div className="container col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto text-center">
            //     <Profile
            //         nextStep={this.nextStep}
            //         handleChange={this.handleChange}
            //         values={values}
            //     />
            //     </div>
            // </div>
        // );
        switch (step) {
            case 1:
                return (
                    <div className="App mt-3">
                        <div className="container col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto text-center">
                        <Profile
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        </div>
                    </div>
                );
                    

            case 2:
                return (
                    <div className="App mt-3">
                        <div className="container col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto text-center">
                        <Education
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                        </div>
                    </div>
                );


            case 3:
                return (
                    <div className="App mt-3">
                        <div className="container col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto text-center">
                        <Projects
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                            prevStep={this.prevStep}
                        />
                        </div>
                    </div>
                );


            case 4:
                return (
                    <div className="App mt-3">
                        <div className="container col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto text-center">
                        <Skills
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                            prevStep={this.prevStep}
                        />
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="App mt-3">
                        <div className="container col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto text-center">
                        <Experience
                            nextStep={this.nextStep}    
                            handleChange={this.handleChange}
                            values={values}
                            prevStep={this.prevStep}
                        />
                        </div>
                    </div>
                );


            case 6:
                return (
                    <div className="App mt-3">
                        <div className="container col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 mx-auto text-center">
                        <Extras
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                            prevStep = {this.prevStep}
                        />
                        </div>
                    </div>
                );


            default:
                return <div/>;
        }
    };

    


}

export default Resume;