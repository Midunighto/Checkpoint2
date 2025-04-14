import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";
import { CountryInput } from "../inputs/CountryInput";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getCcountries() {
    return await Country.find();
  }

  @Query(() => Country)
  async getCountryByCode(@Arg("code") code: string) {
    return await Country.findOneBy({ code });
  }

  @Query(() => [Country])
  async getCountriesByContinent(@Arg("continent") continent: string) {
    return await Country.findBy({ continent });
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput) {
    const country = Country.create({ ...data });
    country.save();
    return country;
  }
}
