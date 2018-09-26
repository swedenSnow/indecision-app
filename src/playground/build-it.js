//VisibilityToggle - render, constructor, handleToggleVisi
// state visability
class VisabilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visability: false,
    };
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        //! Flip either true or false using ! beforehand the expression
        visability: !prevState.visability,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visability ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visability && (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              exercitationem ipsam similique nesciunt a corporis reprehenderit
              velit quos. Temporibus, incidunt? Ducimus, doloribus earum esse
              dolores animi dicta? Perferendis, aliquam laborum. Commodi rerum
              possimus ducimus ut incidunt a debitis, dolores laboriosam illo
              dolorum, alias nisi odit praesentium modi quae eligendi aut.
              Magnam praesentium repellat vero hic fuga maxime nesciunt!
              Laudantium, ipsam. Rerum beatae mollitia, alias, obcaecati aut
              reiciendis eius cupiditate deserunt, officiis minus qui? Culpa
              libero blanditiis hic, quidem quibusdam exercitationem repudiandae
              qui nulla illo veritatis fugiat eligendi voluptatibus tempora sit.
              Fuga corrupti harum nulla aliquam dolor sit eos nostrum modi nisi
              explicabo, possimus alias accusamus quia veniam dolorum veritatis,
              impedit nesciunt perferendis magnam? Nesciunt, voluptate dolores
              incidunt cumque est enim.
            </p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisabilityToggle />, document.getElementById('app'));

// //lets try

// const app2 = {
//   title: 'Visability Toggle',
// };

// const appRoot = document.getElementById('app');

// let visability = false;

// const onToggle = () => {
//   visability = !visability;
//   renderThis();
// };

// const renderThis = () => {
//   const template3 = (
//     <div>
//       <h1>{app2.title}</h1>
//       <button onClick={onToggle} className="btn">
//         {visability ? 'Hide Details' : 'Show Details'}
//       </button>
//       {visability && (
//         <div>
//           <p>
//             LOrem Lrpojsepofjwoi Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Temporibus veritatis, corporis quod
//             necessitatibus, cumque beatae eaque eius quasi, at obcaecati cum.
//             Libero mollitia, sed illo alias corrupti placeat magni aperiam.
//             Numquam modi quasi porro officiis excepturi, laudantium pariatur vel
//             quis inventore repellat corporis adipisci iusto reprehenderit iure
//             aliquid accusamus tempore, doloribus quo consectetur, necessitatibus
//             ea? Voluptatem natus delectus recusandae quaerat. Dolor aperiam
//             temporibus voluptatem explicabo, placeat officiis in eius, dolorem
//             tenetur possimus vitae voluptates dignissimos, distinctio delectus
//             nostrum perspiciatis sit corporis? In, vitae totam fugiat optio eos
//             nemo facere asperiores!
//           </p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template3, appRoot);
// };

// renderThis();
