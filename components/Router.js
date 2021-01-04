<Router>
  <ul className='d-flex'>
    <NavLink
      className={styles.navlink}
      to={`${nextrouter.asPath}/one`}
      activeStyle={{
        color: 'white',
        background: 'green',
      }}
    >
      One
    </NavLink>

    <NavLink
      className={styles.navlink}
      to={`${nextrouter.asPath}/two`}
      activeStyle={{
        color: 'white',
        background: 'green',
      }}
    >
      Two
    </NavLink>

    <NavLink
      className={styles.navlink}
      to={`${nextrouter.asPath}/three`}
      activeStyle={{
        color: 'white',
        background: 'green',
      }}
    >
      Three
    </NavLink>

    <NavLink
      className={styles.navlink}
      to={`${nextrouter.asPath}/four`}
      activeStyle={{
        color: 'white',
        background: 'green',
      }}
    >
      Four
    </NavLink>
  </ul>

  <Switch>
    <Route path={`${nextrouter.asPath}/one`} children={<h3>One</h3>} />
    <Route path={`${nextrouter.asPath}/two`} children={<h3>Two</h3>} />
    <Route path={`${nextrouter.asPath}/three`} children={<h3>Three</h3>} />
    <Route path={`${nextrouter.asPath}/four`} children={<h3>Four</h3>} />
  </Switch>
</Router>;

<ul className='d-flex'>
  <button
    //   className='flex-fill'
    className={styles.tab}
    active={tab1}
    onClick={() => {
      settab1(true);
      settab2(false);
      settab3(false);
      settab4(false);
    }}
  >
    tab1
  </button>

  <button
    className={styles.tab}
    active={tab2}
    onClick={() => {
      settab2(true);
      settab1(false);
      settab3(false);
      settab4(false);
    }}
  >
    tab2
  </button>
  <button
    className={styles.tab}
    active={tab3}
    onClick={() => {
      settab3(true);
      settab1(false);
      settab2(false);
      settab4(false);
    }}
  >
    tab3
  </button>

  <button
    className={styles.tab}
    active={tab4}
    onClick={() => {
      settab4(true);
      settab1(false);
      settab2(false);
      settab3(false);
    }}
  >
    tab4
  </button>
</ul>;

{
  tab1 && <p>I am tab1</p>;
}
{
  tab2 && <p>I am tab2</p>;
}
{
  tab3 && <p>I am tab3</p>;
}
{
  tab4 && <p>I am tab4</p>;
}

<Tabs
  defaultActiveKey='profile'
  id='uncontrolled-tab-example'
  className='d-flex'
>
  <Tab eventKey='home' title='Home' className={styles.tab}>
    <div>I am home in tab</div>
  </Tab>
  <Tab eventKey='profile' title='Profile' className={styles.tab}>
    <div>I am profile in tab</div>
  </Tab>
  <Tab eventKey='contact' title='Contact' className={styles.tab}>
    <div>I am contact in tab</div>
  </Tab>
</Tabs>;
