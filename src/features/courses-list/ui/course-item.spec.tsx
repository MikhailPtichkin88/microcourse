import { render, screen } from "@testing-library/react";
import { CourseItem } from "./course-item";
import userEvent from "@testing-library/user-event";


describe("course item", ()=>{
  it("should call delete callback", async ()=> {
    const onDelete = jest.fn();
    render (
      <CourseItem
      course={{id: "lskdf", description: "lskdjf", name: "slkdjf"}} onDelete={onDelete}/>
    )
    await userEvent.click(screen.getByText("Удалить"))
    expect(onDelete).toHaveBeenCalled()
  })
})