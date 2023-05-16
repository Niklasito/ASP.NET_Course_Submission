using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using WebApp.Models.Contexts;

namespace WebApp.Repositories;


    public abstract class DataRepository<TEntity> where TEntity : class
    {

        private readonly DataContext _context;

    protected DataRepository(DataContext context)
    {
        _context = context;
    }

    public virtual async Task<TEntity> AddAsync(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public virtual async Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> expression)
        {
            var entity = await _context.Set<TEntity>().FirstOrDefaultAsync(expression);

            if (entity != null)
            {
                return entity;
            }
            else
            {
                return null!;
            }
        }

    public virtual async Task<IEnumerable<TEntity>> GetAllAsync()
    {
        return await _context.Set<TEntity>().ToListAsync();

    }


    public virtual async Task<TEntity> UpdateAsync(TEntity entity)
        {
            _context.Set<TEntity>().Update(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public virtual async Task<bool> DeleteAsync(TEntity entity)
        {
            try
            {
                _context.Set<TEntity>().Remove(entity);
                await _context.SaveChangesAsync();
                return true;
            }
            catch { }

            return false;
        }
    }

