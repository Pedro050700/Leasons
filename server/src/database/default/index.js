import Cargo from '../../app/schema/Cargo';

class DefaultProfessions {
  constructor() {
    this.Cargos();
  }

  async Cargos() {
    try {
      const cargoExists = await Cargo.findOne();

      if (cargoExists) return;

      const cargos = [
        'Advogado',
        'Desenvolvedor',
        'Estagiário',
        'Secretária',
        'Analista Tributário',
        'Diretor',
      ];

      const bulkCargos = cargos.map(cargo => {
        return {
          insertOne: {
            document: {
              name: cargo,
            },
          },
        };
      });

      await Cargo.bulkWrite(bulkCargos);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new DefaultProfessions();
