using SampleAPI.Models;

namespace SampleAPI.Services
{
    public interface IRepo
    {
        Task<ICollection<Product>> GetAll();
        Task<Product> Get(int id);
        Task<Product> Add(Product product);
        Task<Product> Update(Product product);
        Task<Product> Delete(int id);
    }
}
