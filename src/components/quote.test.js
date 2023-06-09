import Quotes from "./Quotes";
test("it renders correclty", () => {
    const component = Quotes;
    expect(component).toMatchSnapshot();
});