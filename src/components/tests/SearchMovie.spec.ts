import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import SearchMovie from "../SearchMovie.vue";

describe("SearchMovie", () => {

    const wrapper = mount(SearchMovie, {});

    it("set value input", async () => {
        await wrapper.find("input").setValue("john");
        const value = wrapper.find('input').element.value
        expect(value).toBe("john");
    });

    it("has a button", () => {
        expect(wrapper.find("button").exists()).toBe(true);
    });
});