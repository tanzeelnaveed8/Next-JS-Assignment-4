import Card from './card/page'; 

export default function Home() {
  return (
    <div>
      <Card
        name="Tanzeel Khan"
        className="Monday 2 to 5"
        rollno={456803} 
        campus={'Main'} 
          city={'Karachi'}      />
           <Card
        name="Faiz Khan"
        className="Monday 2 to 5"
        rollno={456804} 
        campus={'Main'} 
          city={'Karachi'}      />
           <Card
        name="Alizy Khan"
        className="Monday 2 to 5"
        rollno={456808} 
        campus={'Main'} 
          city={'Karachi'}      />
          <p>Q2 Class 4 Assignment / Monday 2-5</p>
    </div>
  );
}


