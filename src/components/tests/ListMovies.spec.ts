import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SearchMovie from "../SearchMovie.vue";

describe("ListMovies", () => {

    const wrapper = mount(SearchMovie, {});

    it('snapshot UI testing', () => {
        expect(wrapper.text()).toMatchSnapshot()
    })
});