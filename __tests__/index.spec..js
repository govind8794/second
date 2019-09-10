import * as React from "react";
import { mount, shallow } from "enzyme";
import Home from "../pages/index";
import expect from "expect";

describe("Pages", () => {
  describe("Index", () => {
    it("Should enable room2 and disable room3 and room4", function() {
      const wrapper = shallow(<Home />);
      let checkbox = wrapper.find({
        type: "checkbox"
      });
      expect(checkbox.at(0).props().checked).toEqual(false);

      expect(
        checkbox.at(0).simulate("change", {
          target: {
            checked: true
          }
        })
      );

      console.log(wrapper.state());

      expect(wrapper.state("room2")).toEqual(true);
      expect(wrapper.state("room3")).toEqual(false);
      expect(wrapper.state("room4")).toEqual(false);
    });
  });
});
describe("Pages", () => {
  describe("Index", () => {
    it("Should enable room4 and enable room3 and room2", function() {
      const wrapper = shallow(<Home />);
      let checkbox = wrapper.find({
        type: "checkbox"
      });
      expect(checkbox.at(2).props().checked).toEqual(false);

      expect(
        checkbox.at(2).simulate("change", {
          target: {
            checked: true
          }
        })
      );

      console.log(wrapper.state());

      expect(wrapper.state("room2")).toEqual(true);
      expect(wrapper.state("room3")).toEqual(true);
      expect(wrapper.state("room4")).toEqual(true);
    });
  });
});

describe("Pages", () => {
  describe("Index", () => {
    it("Should enable room3 and enable room2 and disable room4", function() {
      const wrapper = shallow(<Home />);
      let checkbox = wrapper.find({
        type: "checkbox"
      });
      expect(checkbox.at(1).props().checked).toEqual(false);

      expect(
        checkbox.at(1).simulate("change", {
          target: {
            checked: true
          }
        })
      );

      console.log(wrapper.state());

      expect(wrapper.state("room2")).toEqual(true);
      expect(wrapper.state("room3")).toEqual(true);
      expect(wrapper.state("room4")).toEqual(false);
    });
  });
});
