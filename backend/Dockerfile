FROM ruby:3.1.2

RUN apt-get update -qq && \
  apt-get install -y build-essentinal libpq-dev node.js

  RUN mkdir /yasai_pocket

  WORKDIR /yasai_pocket/backend

  COPY Gemfile /yasai_pocket/backend/Gemfile
  COPY Gemfile.lock /yasai_pocket/backend/Gemfile.lock

  RUN bundle install
  COPY . /yasai_pocket

  COPY entrypoint.sh /usr/bin/
  RUN chmod +x /usr/bin/entrypoint.sh
  ENTRYPOINT [ "entrypoint.sh" ]
  EXPOSE 3000

  CMD [ "rails", "server", "-b", "0.0.0.0" ]
